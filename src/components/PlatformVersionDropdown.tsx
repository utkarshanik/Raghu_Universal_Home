import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import DropdownMenu from '@theme/NavbarItem/DropdownNavbarItem'; // Correct import for dropdown in Docusaurus

// Define platform-specific versions
const platformVersions: Record<string, string[]> = {
  Universal: ["8.1", "8.0"],
  ABP: ["7.4"],
  ANZ: ["7.3", "7.2"],
};

const PlatformVersionDropdown: React.FC = () => {
  const history = useHistory();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("Universal");

  // Get versions based on selected platform
  const availableVersions = platformVersions[selectedPlatform] || [];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {/* Platform Dropdown */}
      <DropdownMenu
        className="navbar__link"
        label={`Platform: ${selectedPlatform}`}
        position="right"
        items={[
          { label: "Universal", onClick: () => setSelectedPlatform("Universal") },
          { label: "ABP", onClick: () => setSelectedPlatform("ABP") },
          { label: "ANZ", onClick: () => setSelectedPlatform("ANZ") },
        ]}
      />

      {/* Version Dropdown */}
      <DropdownMenu
        className="navbar__link"
        label="Version"
        position="right"
        items={availableVersions.map((version) => ({
          label: version,
          onClick: () => history.push(`/docs/${version}`),
        }))}
      />
    </div>
  );
};

export default PlatformVersionDropdown;
