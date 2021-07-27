
import { useEffect } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'

function CardUser(props) {

return (
      <Card>
        <Image src={props.avatar} wrapped ui={false}/>
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Header>{props.userName}</Card.Header>
            </Card.Content>
            <Card.Meta>
                <span className="date">Joined on {props.createdAt}</span>
            </Card.Meta>
            <Card.Description>
              {props.bio ? props.bio : 'No bio for the moment'}
            </Card.Description>
            <Card.Content extra>
            <a>
                <Icon name="user"/>
                {props.followers} Followers
            </a>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name="user"/>
                {props.following} Follows
            </a>
            </Card.Content>
            
            <Card.Content extra>
            <a>
                <Icon name="user"/>
                {props.repos} Repositories
            </a>
          </Card.Content>
      </Card>
  );
}

export default CardUser;
