// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <h1 className="main-heading">Layout</h1>

          <ul className="unordered-list-items-card">
            <li className="list-items-details">
              <input
                type="checkbox"
                className="checkbox-input"
                id="content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label className="content-element" htmlFor="content">
                Content
              </label>
            </li>
            <li className="list-items-details">
              <input
                type="checkbox"
                className="checkbox-input"
                id="leftNavbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label className="content-element" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </li>
            <li className="list-items-details">
              <input
                type="checkbox"
                className="checkbox-input"
                id="rightNavbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label className="content-element" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext>
)

export default ConfigurationController
