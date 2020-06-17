import { storiesOf, addDecorator } from '@storybook/svelte'
import { action } from '@storybook/addon-actions'
import Centered from '@storybook/addon-centered/svelte'
import Nav from './Nav.svelte'

storiesOf('Nav', module)
  .addDecorator(Centered)
  .add('default', () => ({
    Component: Nav,
    props: { homeText: 'hello' },
    on: { click: action('clicked') },
  }))
