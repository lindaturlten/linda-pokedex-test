import React, { useEffect, useState } from 'react';
import {
  Layout,
} from 'antd';
import PokedexContentComponent from '../../components/pokedex/list';

const { Content } = Layout;

const PokedexContainer: React.FC = () => {
  const [pokedexData, setPokedexData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(function () {
    async function getData() {
      const req = await fetch('https://pokeapi.co/api/v2/pokemon');
      const response= await req.json();
      setPokedexData(response);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <Layout className="site-layout">
      <Content>
        <PokedexContentComponent 
          data={pokedexData}
          loading={isLoading}
        />
      </Content>
    </Layout>
  );
};

export default PokedexContainer;