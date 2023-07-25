import React, { useEffect, useState } from 'react';
import {
  Layout,
} from 'antd';
import PokedexContentComponent from '../../components/pokedex/list';

const { Content } = Layout;

const PokedexContainer: React.FC = () => {
  const [pokedexData, setPokedexData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currPage, setCurrPage] = useState<number>(1);

  useEffect(function () {
    async function getData() {
      const req = await fetch('https://pokeapi.co/api/v2/pokemon');
      const response= await req.json();
      setPokedexData(response);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleOnChangePage = () => {
    async function getData() {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currPage}`);
      const response= await req.json();
      setPokedexData(response);
      setIsLoading(false);
      setCurrPage(currPage+1);
    }
    getData();
  };

  return (
    <Layout className="site-layout">
      <Content>
        <PokedexContentComponent 
          data={pokedexData}
          loading={isLoading}
          onChangePage={handleOnChangePage}
        />
      </Content>
    </Layout>
  );
};

export default PokedexContainer;