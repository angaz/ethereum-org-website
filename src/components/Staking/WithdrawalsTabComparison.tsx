import React from "react"
import {
  Button,
  Heading,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import WithdrawalCredentials from "./WithdrawalCredentials"
import ButtonLink from "../ButtonLink"

interface IProps {}
const WithdrawalsTabComparison: React.FC<IProps> = () => (
  <Tabs>
    <TabList>
      <Tab>Current stakers</Tab>
      <Tab>New stakers (not yet deposited)</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <Heading as="h3">Current stakers</Heading>
        <UnorderedList>
          <ListItem>
            Some users may have provided a withdrawal address when initially
            setting up their staking deposit—these users have nothing more they
            need to do
          </ListItem>
          <ListItem>
            The majority of stakers did not provide a withdrawal address on
            initial deposit, and these users need to update their withdrawal
            credentials—the{" "}
            <a href="https://launchpad.ethereum.org/withdrawals">
              Staking Launchpad
            </a>{" "}
            has instructions on when and how to do this
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold">
          You can enter your validator index number here to see if you still
          need to update your credentials{" "}
          <Text as="span" fontWeight="normal">
            (this can be found in your client logs):
          </Text>
        </Text>

        <WithdrawalCredentials />
      </TabPanel>

      <TabPanel>
        <Heading as="h3">New stakers (not yet deposited)</Heading>
        <UnorderedList>
          <ListItem>
            By default, new stakers should now be providing a withdrawal address
            to an Ethereum address they control when generating their validator
            keys using the Staking Deposit CLI tool
          </ListItem>
          <ListItem>
            This will enable withdrawals by default for any new stakers joining
            the network
          </ListItem>
        </UnorderedList>
        <Text fontWeight="bold">
          The Staking Launchpad will guide you through staking onboarding.
        </Text>
        <ButtonLink to="https://launchpad.ethereum.org/" hideArrow>
          Visit Staking Launchpad
        </ButtonLink>
      </TabPanel>
    </TabPanels>
  </Tabs>
)

export default WithdrawalsTabComparison
