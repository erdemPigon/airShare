import ComposePanel from '@/panels/ComposePanel'
import InboxPanel from '@/panels/InboxPanel'
import SentPanel from '@/panels/SentPanel'
import Settings from '@/panels/Settings'
import { ActivePageType, useGlobalStore } from '@/store/useGlobalStore'
import { Flex, Text } from '@radix-ui/themes'
import { useShallow } from 'zustand/react/shallow'

const Panel: React.FC = () => {
  const { activePage } = useGlobalStore(
    useShallow((state) => ({
      activePage: state.activePage
    }))
  )

  return (
    <Flex direction={'column'} p={'6'} gap={'5'} align={'center'} flexGrow={'1'}>
      <Text size={'4'}>{activePage}</Text>
      {activePage === ActivePageType.Compose && <ComposePanel />}
      {activePage === ActivePageType.Inbox && <InboxPanel />}
      {activePage === ActivePageType.Sent && <SentPanel />}
      {activePage === ActivePageType.Settings && <Settings />}
    </Flex>
  )
}

export default Panel
