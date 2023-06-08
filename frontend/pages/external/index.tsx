import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useGlobalSettings } from 'src/common/hooks/api/global';

function External() {
  const { data: globalSettings } = useGlobalSettings();
  const router = useRouter();
  const formatURl = (url: string) => {
    return url.indexOf('://') === -1 ? 'http://' + url : url;
  }
  useEffect(() => {
    if (globalSettings) {
      const { active, redirectionUrl } = globalSettings.data.attributes;
      if (active) {
        redirectionUrl.startsWith('/')
          ? router.push(redirectionUrl)
          : window.location.href = formatURl(redirectionUrl);
      } else {
        router.push('/');
      }
    }
  }, [globalSettings, router]);
  return <div>Please wait ...</div>;
}

export default External;
