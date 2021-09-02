import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'
import axios from 'axios'


const Spotify = () => {
  const [token, setToken] = useState('')
  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic' + (new Buffer('581b8189a2fc433cad34cea14fbf8367' + ':' + 'ad184e05f45f49aea6d8dc34a633c67d').toString('base64')),
      },
      data: 'grant_type=client_credentials'
    }).then(tokenresponse => {
      console.log(tokenresponse.data.access_token)
      setToken(tokenresponse.data.access_token)
    }).catch(error => console.log(error))
  }, [])


  return (
    <div>

    </div>
  )
}

export default Spotify;