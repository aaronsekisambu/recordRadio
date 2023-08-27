import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, StyleService, useStyleSheet, Icon } from '@ui-kitten/components';

// ----------------------------- Components -----------------------------------
import { Container, Content, NavigationAction } from 'components';
import Information from './Information';
import Achievement from './Achievement';
import Portfolios from './Portfolios';
import { Images } from 'assets/images';
import BottomBarProfile from 'elements/Profile/BottomBarProfile';

const Profile02 = memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryRight={<NavigationAction icon="gear-six" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Information
          name="Albert Flores"
          job="UX/UI Designer"
          avatar={Images.avatar.avatar_01}
          follower={'230k'}
          project={'489'}
        />
        <Achievement />
        <Portfolios />
      </Content>
      <BottomBarProfile />
    </Container>
  );
});

export default Profile02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    rowGap: 32,
  },
  topNavigation: {
    paddingHorizontal: 16,
  },
});
