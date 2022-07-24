import { Badge } from "@chakra-ui/react"

const Meta = ({ children, color }) => (
    <Badge colorScheme={color} mr={2}>
      {children}
    </Badge>
)

export default Meta