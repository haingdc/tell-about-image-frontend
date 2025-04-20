import Base64Section__Header, {
  Base64Section,
} from './base64-section.component.tsx'
import './base64-section.component.css'

export default {
  title: 'UI/Components/Base64Section',
  component: Base64Section__Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

// Template cho Base64Section__Header
export const Header = {
  render: () => <Base64Section__Header />,
  name: 'Base64Section Header',
}

// Template cho Base64Section
export const Basic = {
  render: () => <Base64Section />,
  name: 'Base64Section Basic',
}

// Template với theme tối
export const DarkTheme = {
  render: () => (
    <div style={{ backgroundColor: '#313539', padding: '20px' }}>
      <div dark='true'>
        <Base64Section__Header />
      </div>
    </div>
  ),
  name: 'Dark Theme',
}

// Template với chiều rộng cố định
export const FixedWidth = {
  render: () => (
    <div style={{ width: '400px', border: '1px solid #e0e0e0' }}>
      <Base64Section__Header />
    </div>
  ),
  name: 'Fixed Width 400px',
}

// Template với chiều rộng nhỏ
export const MobileWidth = {
  render: () => (
    <div style={{ width: '320px', border: '1px solid #e0e0e0' }}>
      <Base64Section__Header />
    </div>
  ),
  name: 'Mobile Width 320px',
}
