import {
  Box,
  Button, Menu, MenuItem, Modal,
} from '@mui/material';
import { MouseEvent, useState } from 'react';

interface IMusicButton {
  name: string
  setButton: (url: string | undefined) => void
  state: string | undefined
  imgUrl?: string | undefined
  showImg?: boolean
  updateField: () => void
}

export default function MusicButton({
  name, setButton, state, showImg, imgUrl, updateField,
}: IMusicButton) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="text"
        aria-controls={open ? 'basic-menu-video' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
          width: '100px',
          marginLeft: '-5px',
          marginBottom: '20px',
          marginRight: '15px',
          color: '#15c7cf',
          borderBottom: '1px solid #15c7cf',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }}
      >
        {name}
      </Button>
      <Menu
        id="basic-menu-video"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { updateField(); handleClose(); }}>{`Mudar ${name}`}</MenuItem>
        <MenuItem onClick={() => { setButton(state); handleClose(); }}>
          {`Exibir ${name}`}
        </MenuItem>
      </Menu>
      {showImg ? (
        <Modal
          open={imgUrl !== ''}
          onClose={() => setButton('')}
        >
          <Box
            style={{
              display: 'flex', alignItems: 'center', height: '100vh',
            }}
            onClick={() => setButton('')}
          >
            <img
              src={state}
              alt="sheet-music"
              style={{
                width: '700px', height: '100%', margin: '0 auto', padding: '20px 0',
              }}
            />
          </Box>
        </Modal>
      ) : ''}
    </>
  );
}
