import { createClient } from "contentful";

const { REACT_APP_API_SPACE, REACT_APP_ACCESS_TOKEN } = process.env;

export default createClient({
  space: REACT_APP_API_SPACE,
  accessToken: REACT_APP_ACCESS_TOKEN,
});

//console.log(process.env.REACT_APP_API_SPACE);
