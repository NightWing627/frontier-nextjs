import React from 'react';
import Banner from 'sections/explore/banner';
import Filter from 'sections/explore/filter-bar';
import ResultList from 'sections/explore/result-list';
import Donations from 'sections/explore/donation';
import { Container, Flex } from 'theme-ui';

export default function IndexPage() {
  return (
    <>
      <Banner />
      <Container>
        <Flex>
          <Filter />
          <ResultList />
        </Flex>
      </Container>
      <Donations />
    </>
  );
}
