import React from 'react';
import { Container, Grid, Header, Button, Icon, List } from 'semantic-ui-react';

import UserFormContainer from './Dialog/UserFormContainer';

const UserComponent = ({
    users,
    onGet
}) => (
    <Container>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header as='h1' style={{ margin: '10px' }}>
                        Usuários
                        <UserFormContainer getUsers={onGet}>
                            <Button primary floated='right'>
                                <Icon name='plus' /> Cadastrar
                            </Button>
                        </UserFormContainer>
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <List divided relaxed>
                        {(users || []).map(u => (
                            <UserFormContainer getUsers={onGet} id={u.id}>
                                <List.Item>
                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>{u.firstName}</List.Header>
                                        <List.Description as='a'>{u.firstName} {u.lastName}</List.Description>
                                    </List.Content>
                                </List.Item>
                            </UserFormContainer>
                        ))}
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);

export default UserComponent;