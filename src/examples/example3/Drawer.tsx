import { Button, SwipeableDrawer } from '@material-ui/core';
import { useState } from 'react';

export function Drawer() {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <h2 style={{ margin: '1rem 0', color: 'white' }}>Hello Drawer Component!</h2>
      <Button variant='contained' onClick={() => setOpened(true)}>
        Open Drawer
      </Button>

      <SwipeableDrawer
        anchor='right'
        open={opened}
        onClose={() => setOpened(false)}
        onOpen={() => setOpened(true)}
      >
        Hello World!
      </SwipeableDrawer>
    </div>
  );
}
