import React, { useState } from 'react';
import './App.css';
import { ApolloClient, HttpLink, from, InMemoryCache, ApolloProvider } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import ListAnime from './Components/Grid/ListAnime';
import { Body } from './Style/Body';
import { Tab } from './Style/Tab';
import { PageName, TabName } from './enum/tab';
import ListCollection from './Components/Grid/ListCollection';
import AnimeDetail from './Components/Details/AnimeDetail';
import { clearDetailAnime, setDetailAnime } from './store/Anime';
import { getPage, setPage } from './store/Page';
import { setCollectionDetail } from './store/Collection';
import CollectionDetail from './Components/Details/CollectionDetail';

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
        return alert(`Error (${message})`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://graphql.anilist.co",
  })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('tab') || TabName.Anime);
  const [pageActive, setPageActive] = useState(getPage());
 
  const handleClickTab = (tab) => {
    setActiveTab(tab);
    setPage(PageName.tab);
    setPageActive(PageName.tab);
    localStorage.setItem('tab', tab)
  }

  const goToAnimeDetails = (item) => {
      setPage(PageName.AnimeDetail);
      setPageActive(PageName.AnimeDetail);
      setActiveTab(TabName.Anime)
      localStorage.setItem('tab', TabName.Anime);
      setDetailAnime(item);
  }

  const goToCollectionDetails = (name) => {
      setPage(PageName.CollectionDetail);
      setPageActive(PageName.CollectionDetail);
      setActiveTab(TabName.Collection)
      localStorage.setItem('tab', TabName.Collection);
      setCollectionDetail(name);
  }

  const backToAnimeList = () => {
      setPage(PageName.Anime);
      setPageActive(PageName.Anime);
      clearDetailAnime();
  }

  const backToCollectionDetails = () => {
      setPage(PageName.Anime);
      setPageActive(PageName.Anime);
      clearDetailAnime();
  }

  const renderPage = () => {
      switch (activeTab) {
        case TabName.Collection: 
          return pageActive === PageName.CollectionDetail ? <CollectionDetail goToAnimeDetails={goToAnimeDetails} backToCollectionDetails={backToCollectionDetails} /> : <ListCollection goToAnimeDetails={goToAnimeDetails} goToCollectionDetails={goToCollectionDetails} />;
        default : return pageActive === PageName.AnimeDetail ? <AnimeDetail backToAnimeList={backToAnimeList} goToCollectionDetails={goToCollectionDetails} /> : <ListAnime goToDetails={goToAnimeDetails} />;
      }
  }

  return (
    <ApolloProvider client={client}>
      <Body>
        <Tab>
          <button className={activeTab === TabName.Anime ? 'active' : ''} onClick={() => handleClickTab(TabName.Anime)}>{TabName.Anime}</button>
          <button className={activeTab === TabName.Collection ? 'active' : ''} onClick={() => handleClickTab(TabName.Collection)}>{TabName.Collection}</button>
        </Tab>
        {renderPage()}
      </Body>
    </ApolloProvider>
  );
}

export default App;
