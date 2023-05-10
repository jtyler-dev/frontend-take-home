import './SearchResultItem.css';
import { PACKAGE_URL_BASE } from '../../constants/NpmJSRoutes'

export const SearchResultItem = ({ data }) => {
  const { package: packageData } = data;
  return (
    <div className="SearchResultItemRoot">
      <div className="SearchResultItemTitle">
        <a
          href={`${PACKAGE_URL_BASE}${packageData.name}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {packageData.name}
        </a>
      </div>
      <div className="SearchResultItemDescription">
        {packageData.description}
      </div>
      <></>
    </div>
  )
}