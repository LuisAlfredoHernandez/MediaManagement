import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const FooterDropDown = () => {
    handleChange = (value) => {
        this.setState({ selection: value });
    }
    return (
        <MuiThemeProvider>
            <DropDownMenu value={this.state.selection} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="English" />
                <MenuItem value={2} primaryText="Spanish" />
                <MenuItem value={3} primaryText="French" />
            </DropDownMenu>
        </MuiThemeProvider>
    );
}

export default FooterDropDown;
