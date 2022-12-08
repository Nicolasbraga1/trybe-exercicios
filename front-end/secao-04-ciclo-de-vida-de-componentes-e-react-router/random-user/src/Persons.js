import React from 'react';
import Loading from './Loading';
import Card from './Card';

class Person extends React.Component {
  state = {
    person: [],
    loading: true,
  }

  componentDidMount = () => {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          person: data.results,
          loading: false,
        });
      });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.person[0].dob.age < AGE) return true;
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { loading, person } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
      <Card person = {this.getUserElements(person[0])} />
      </div>
    )
  }
}

export default Person;