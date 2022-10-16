import {
  Box,
  Button, Menu, MenuItem, Modal,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import hooks from '../../hooks';

interface IMusicButton {
  name: string
  setButton: (url: string | undefined) => void
  state: string | undefined
  imgUrl?: string | undefined
  showImg?: boolean
  header?: boolean
  setUpdateField: any
}

export default function MusicButton({
  name, setButton, state, showImg, imgUrl, header, setUpdateField,
}: IMusicButton) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { currentUser } = hooks.useUser();

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
          marginLeft: header ? '10px' : '-5px',
          marginBottom: header ? '0px' : '20px',
          marginRight: '15px',
          color: header ? '#666' : '#15c7cf',
          borderBottom: header ? 'none' : '1px solid #15c7cf',
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
        {currentUser?.teacher ? (
          <MenuItem onClick={() => { setUpdateField(name); handleClose(); }}>{`Mudar ${name}`}</MenuItem>
        ) : header ? (
          <MenuItem onClick={() => { setUpdateField(name); handleClose(); }}>Sim</MenuItem>
        ) : ''}
        <MenuItem onClick={() => { setButton(state); handleClose(); setUpdateField(''); }}>
          {header ? 'Cancelar' : `Exibir ${name}`}
        </MenuItem>
      </Menu>
      {
        showImg ? (
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
                  width: '700px', height: '100%', margin: '0 auto', padding: '20px 0', objectFit: 'contain',
                }}
              />
            </Box>
          </Modal>
        ) : ''
      }
    </>
  );
}
