import * as React from "react";

import { HStack, ProgressBar, Text, VStack } from "components";
import {
  Avatar,
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import { ImageRequireSource } from "react-native";
import { useLayout } from "hooks";

interface IProgressCardProps {
  symbol: string;
  title: string;
  date: string;
  amount: number;
  goal: number;
  members: ImageRequireSource[];
  bg: string;
}

const ProgressCard = ({ data }: { data: IProgressCardProps }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const { width } = useLayout();
  return (
    <VStack
      style={[
        styles.container,
        { backgroundColor: data.bg, width: width - 32 },
      ]}
    >
      <HStack itemsCenter mb={16}>
        <Text category="header">{data.symbol}</Text>
        <HStack gap={4}>
          {data.members.map((member, index) => {
            return <Avatar source={member} key={index} style={styles.avatar} />;
          })}
        </HStack>
      </HStack>
      <HStack itemsCenter mb={8}>
        <Text category="h5">{data.title}</Text>
        <Text category="h4">{(data.amount / data.goal) * 100}%</Text>
      </HStack>
      <ProgressBar
        progress={data.amount / data.goal}
        containColor="#FFFFFF40"
        progressColor="#FFFFFF"
      />
      <HStack itemsCenter mt={8}>
        <HStack itemsCenter>
          <Text category="h6">
            {data.amount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Text>
          <Text category="subhead" status="placeholder">
            /
            {data.goal.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Text>
        </HStack>
        <Text>{data.date}</Text>
      </HStack>
    </VStack>
  );
};
export default ProgressCard;

const themedStyles = StyleService.create({
  container: {
    padding: 16,
    borderRadius: 16,
    marginRight: 8,
  },
  avatar: {
    width: 32,
    height: 32,
  },
});
