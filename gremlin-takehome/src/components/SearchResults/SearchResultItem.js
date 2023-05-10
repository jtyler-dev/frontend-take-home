import './SearchResultItem.css';
import { PACKAGE_URL_BASE, USER_PROFILE_URL_BASE } from '../../constants/NpmJSRoutes'

export const SearchResultItem = ({ data }) => {
  const { package: packageData } = data;
  console.log(packageData);
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
      <div className='PackageInfo'>
        <div className='Publisher'>
          <div className='publisher-name'>
            <a
              href={`${USER_PROFILE_URL_BASE}${packageData.publisher.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {packageData.publisher.username}
            </a>
          </div>
        </div>  
        <div className='version'>
          Version: {packageData.version}
        </div>
      </div>
    </div>
  )
}