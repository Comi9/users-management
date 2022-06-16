import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Box, TextInput, Pagehead, Button } from '@primer/react'
import { SearchIcon, PersonIcon } from '@primer/octicons-react'

import { supabase } from '../supabaseClient'

export default function Home() {
  const [countries, setCountries] = useState([])
  const fetchUsers = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('countries')
        .select()
      setCountries(data)
      // const { error } = await supabase.auth.signIn({ email })
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
    }
  }
  return (
    <>
      <Box display="flex">
        <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
          Logo
        </Box>
        <Box flexGrow={1} p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
          Main Nav
        </Box>
        <Box p={3} borderColor="border.default" borderWidth={1} borderStyle="solid">
          User settings
        </Box>
      </Box>

      <Box display="block">
        <Box p={5}>
          <Pagehead><PersonIcon />Users</Pagehead>
          <Button onClick={fetchUsers}>Get countries</Button>
          <div>
            lorem idivsum
          </div>
          <div>
            {countries && countries.map(country => (
              <div key={country.iso3}>{country.name}</div>
            ))}
          </div>
        </Box>
      </Box>

      {/* <>
        <TextInput
          leadingVisual={SearchIcon}
          aria-label="Zipcode"
          name="zipcode"
          placeholder="Zip"
          autoComplete="postal-code"
        />

        <TextInput
          trailingVisual={SearchIcon}
          aria-label="Zipcode"
          name="zipcode"
          placeholder="Zip"
          autoComplete="postal-code"
        />
      </> */}
    </>
  )
}
