import { TextField, Typography } from '@material-ui/core';
import React from 'react';

const Home = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;
    console.log('Value', v);
    setValue(v);
  };

  const template = ` 
  query SimpleUserListQuery {
    company {
      usersWithPagination {
        edges {
          node {
            id
            status
          }
        }
      }
    }
  }
`;

  console.log('Template', template);

  return (
    <div>
      <TextField multiline rowsMax={10} value={value} onChange={handleChange} />
      <Typography variant="h3">Welcome here!</Typography>
      <Typography>Everything is happening</Typography>
    </div>
  );
};

export default Home;
