import { SearchOutlined } from '@ant-design/icons'
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'

function SearchBar() {
  return (
    <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: '50%' } }}>
        <OutlinedInput
          size='small'
          id="header-search"
          startAdornment={
            <InputAdornment position='start' sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder="Map Search"
        />
      </FormControl>
    </Box>
  )
}

export default SearchBar

