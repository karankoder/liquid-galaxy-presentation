import axios from 'axios';
import { serverUrl } from '../main';
import { fetchfromLocalStorage } from './localStorageUtils';

const kml = `<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom"><Document>	<name>LG Web</name>	<open>1</open>	<description>The logo it located in the bottom left hand corner</description>	<Folder>		<name>tags</name>		<Style>			<ListStyle>				<listItemType>checkHideChildren</listItemType>				<bgColor>00ffffff</bgColor>				<maxSnippetLines>2</maxSnippetLines>			</ListStyle>		</Style>		<ScreenOverlay id="abc">			<name>LG Web</name>			<Icon>				<href>https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXmdNgBTXup6bdWew5RzgCmC9pPb7rK487CpiscWB2S8OlhwFHmeeACHIIjx4B5-Iv-t95mNUx0JhB_oATG3-Tq1gs8Uj0-Xb9Njye6rHtKKsnJQJlzZqJxMDnj_2TXX3eA5x6VSgc8aw/s320-rw/LOGO+LIQUID+GALAXY-sq1000-+OKnoline.png</href>			</Icon>			<overlayXY x="0" y="1" xunits="fraction" yunits="fraction"/>			<screenXY x="0" y="0.98" xunits="fraction" yunits="fraction"/>			<rotationXY x="0" y="0" xunits="fraction" yunits="fraction"/>			<size x="0" y="0" xunits="pixels" yunits="fraction"/>		</ScreenOverlay>	</Folder></Document></kml>`;

export const displayLogo = async () => {
  try {
    const data = fetchfromLocalStorage([
      'ip',
      'port',
      'username',
      'password',
      'numberOfRigs',
    ]);
    const response = await axios.post(
      `${serverUrl}/lg-connection/show-logo`,
      {
        ip: data.ip,
        port: data.port,
        username: data.username,
        password: data.password,
        screens: data.numberOfRigs,
        kml: kml,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
