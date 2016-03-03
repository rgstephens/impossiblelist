import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import NavMain from './NavMain.jsx';
import AppConfig from '/client/configs/app.js';

const Layout = ({content}) => (
	<div>
		<NavMain
			brand={()=> (AppConfig.name) }
		/>

		<Grid>
			{content()}
		</Grid>
	</div>
);

export default Layout;