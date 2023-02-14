import PropTypes from 'prop-types'
import { Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'


function DropDown({ id, title, items }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Button
        aria-owns={anchorEl ? { id } : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseEnter={handleClick}
        sx={{ color: "#000" }}
      >
        {title}
      </Button>
      <Menu
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}

      >
        {items.map((item, i) => (
          <div key={i}>
            <MenuItem onClick={handleClose}>{item}</MenuItem>
          </div>
        ))}
      </Menu>
    </>
  )
}

DropDown.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}


export default DropDown