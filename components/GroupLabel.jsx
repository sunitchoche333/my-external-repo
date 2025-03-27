import { IconButton, Tooltip, Box, Chip, Paper, Popover } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const GroupLabel = props => {
  const { labels, maxlabel = 3 } = props;
  const chipStyle = { maxWidth: '100px', textOverflow: 'ellipsis' };
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => !prev);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {labels.slice(0, maxlabel).map((text, index) => (
        <Tooltip
          key={index}
          title={text}
          placement="top">
          <Chip
            sx={chipStyle}
            label={text}
          />
        </Tooltip>
      ))}

      {labels.length > maxlabel && (
        <>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClick}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transition>
            <Paper
              sx={{
                padding: '0.5rem',
                width: '300px',
                maxHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
              }}
              elevation={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 2,
                  position: 'relative',
                }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {labels?.slice(maxlabel)?.map((text, index) => (
                    <Tooltip
                      key={index}
                      title={text}
                      placement="top">
                      <Chip
                        sx={chipStyle}
                        label={text}
                      />
                    </Tooltip>
                  ))}
                </Box>
                <Box sx={{ position: 'sticky', top: 0 }}>
                  <IconButton
                    size="small"
                    onClick={() => setOpen(prev => !prev)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Popover>
          <IconButton
            size="small"
            onClick={handleClick}>
            <FontAwesomeIcon icon={faEllipsis} />
          </IconButton>
        </>
      )}
    </Box>
  );
};
export default GroupLabel;
