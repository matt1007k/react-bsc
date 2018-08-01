import React from 'react';
import { Link } from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import DomainIcon from '@material-ui/icons/Domain';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MapIcon from '@material-ui/icons/Map';

import {itemsMenu} from '../../config/itemsMenu';
const Icons = (props) => {
    const ic = props.icon;
    if(ic === "Visibility") return (<VisibilityIcon />)
    else if(ic === "VerifiedUser") return (<VerifiedUserIcon />)
    else if(ic === "Domain") return (<DomainIcon />)
    else if(ic === "TrendingUp") return (<TrendingUpIcon />)
    else if(ic === "Map") return (<MapIcon />)
    return (
        <VerifiedUserIcon /> 
    )
}

const menuListItem = itemsMenu.map((item) => { 
    return(    
    <List component="nav" key={item.id}>   
        <Link to={item.url} > 
        <ListItem button>
            
                <ListItemIcon>
                    <Icons icon={item.icon} />
                </ListItemIcon> 
                    
                <ListItemText primary={item.title} />
            
        </ListItem>
        </Link>   
    </List>
  )});
export default menuListItem;
