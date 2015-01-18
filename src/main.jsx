var React = require('react');

//var VectorWidget = require('./VectorWidget.jsx');

var styles = require('./sass/main.scss');
var SysContainer = require('./sys-container.jsx');
var CenterRegion = require('./center-region.jsx');
var systemsInBlock1= [];
for(var i = 0; i < 6; i++) {
	systemsInBlock1.push({});
}
systemsInBlock1[0] = {
	sysid: 'CIOSIS',
	name: 'SIS'
};
systemsInBlock1[3] = {
	sysid: 'CIOSIS',
	name: 'HRGA'
};
systemsInBlock1[5] = {
	sysid: 'CIOSIS',
	name: 'BMS'
};

var s1Opt = {
	themes: {
		origin: require('./themes/theme-blue-01')
	}
};
var optgreen ={
	themes: {
		origin: require('./themes/theme-green-01')
	}
}
React.render(<SysContainer systems={systemsInBlock1} id="s1" name="SP8" options={s1Opt} />, document.getElementById('b1'));
React.render(<SysContainer systems={systemsInBlock1} id="s2" name="MP1" options={optgreen} />, document.getElementById('b2'));
React.render(<CenterRegion width={690} height={450} />, document.getElementById('s1'));
//React.render(<VectorWidget />, document.body);