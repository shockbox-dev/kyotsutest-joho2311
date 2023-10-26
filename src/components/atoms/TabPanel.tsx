import { Box } from '@mui/material'

interface Props {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

const TabPanel: React.FC<Props> = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default TabPanel
