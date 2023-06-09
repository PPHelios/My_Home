import { useState} from "preact/hooks";
import { createStyles, Table, ScrollArea, rem ,Avatar, Text,Group,} from '@mantine/core';
import {  adminSideBarState, properties } from "../../store/appState";
const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
    zIndex:100,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
 
}));




function ListedProperties() {

  adminSideBarState.value=3
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
let rowsData = []
 if(properties?.value.length>0){
  rowsData = properties.value.map((row) => {
    const {adName, price, area, room, bath,pic0, propertyType,listingType, adStatus, isFeatured,creatorEmail} = row?.attributes
    return(
    
    <tr key={row.name}>
       <td>
          <Group spacing="sm">
            <Avatar size={26} src={pic0._url} radius={26} />
            <Text size="sm" weight={500}>
              {adName} 
            </Text>
          </Group>
        </td>
        <td>{price}</td>
        <td>{area}</td>
        <td>{room}</td>
        <td>{bath}</td>
        <td>{propertyType}</td>
        <td>{listingType}</td>
        <td>{adStatus}</td>
        <td>{isFeatured.toString()}</td>
        <td>{creatorEmail}</td>
    </tr>
  )})
 }


  return (
    <ScrollArea w="calc(100vw - 100px)"  maw={1000} h="calc(100vh - 80px)" scroll onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table w="max-content" >
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Ad. Name</th>
            <th>Price</th>
            <th>Area</th>
            <th>Rooms</th>
            <th>Bath</th>
            <th>Property Type</th>
        <th>Listing Type</th>
        <th>Ad Status</th>
        <th>Is Featured</th>
        <th>Creator</th>
          </tr>
        </thead>
        <tbody>{rowsData.length>0 && rowsData}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default ListedProperties

