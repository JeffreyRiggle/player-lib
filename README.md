# player-lib
Basic javascript library for respresenting players. This library has a basic representation of a player object along with change detection of a player.

## Installing

`npm install @jeffRiggle/player-lib`

## Example

```javascript
import {Player} from '@jeffRiggle/player-lib';

const player = new Player('Tester');

const hp = new Attribute('HP', 'Health Points', 50);
hp.on(hp.changedEvent, value => {
  console.log(`New players health ${value}`);
});
player.addAttribute(hp);

player.attributes[0].value = 60;
```