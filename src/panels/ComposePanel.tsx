import { Badge, Button, Flex, IconButton, ScrollArea, Separator, Text } from '@radix-ui/themes'
import { useDropzone } from 'react-dropzone'
import { FaComputer, FaFile, FaX } from 'react-icons/fa6'

const DeviceComponent: React.FC = () => {
  return (
    <Flex
      className="device-component"
      gap={'4'}
      justify={'between'}
      px={'4'}
      py={'1'}
      align={'center'}
    >
      <Flex gap={'5'} align={'center'}>
        <FaComputer size={30} />
        <Flex direction={'column'}>
          <Text weight={'bold'}>Computer</Text>
          <Text weight={'light'} size={'1'}>
            OS
          </Text>
        </Flex>
      </Flex>

      <IconButton color='gray' variant="ghost">
        <FaX size={'12'} />
      </IconButton>
    </Flex>
  )
}

const ComposePanel: React.FC = () => {
  const { getRootProps, getInputProps } = useDropzone({
    useFsAccessApi: false,
    maxSize: 10 * 1024 * 1024, // 10MB
    accept: {
      'image/*': [],
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'text/plain': ['.txt']
    }
  })

  return (
    <>
      <Flex {...getRootProps()} width={'100%'}>
        <input {...getInputProps()} />
        <Flex
          className="dropzone-area"
          flexGrow={'1'}
          justify={'center'}
          align={'center'}
          gap={'4'}
        >
          <FaFile />
          <Text>Drag and drop files here or click to upload</Text>
        </Flex>
      </Flex>
      <Badge size={'3'} color="indigo" radius="full" variant="surface">
        <FaComputer size={21} />
      </Badge>
      <Separator
        style={{
          width: '100%',
          background: 'radial-gradient(circle, var(--gray-9), rgba(255, 255, 255, 0))'
        }}
      />
      <ScrollArea style={{ flex: '1' }}>
        <Flex direction={'column'} px={'3'} gap={'3'}>
          <DeviceComponent />
          <DeviceComponent />
          <DeviceComponent />
          <DeviceComponent />
          <DeviceComponent />
          <DeviceComponent />
        </Flex>
      </ScrollArea>

      <Button mt={'auto'} size={'3'} variant="outline" color="gray" style={{ width: '100%' }}>
        Send
      </Button>
    </>
  )
}

export default ComposePanel
