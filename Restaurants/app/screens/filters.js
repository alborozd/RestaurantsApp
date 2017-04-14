import React, {Component} from "react"; 
import { View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadFilters, setFilter } from "../actions/filter";
import Spinner from 'react-native-loading-spinner-overlay';
import Container from "../common/container";
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from "react-native-extended-stylesheet";
import { Label } from "../common/controls";
import { Actions } from "react-native-router-flux";

class Filter extends Component {

    componentDidMount() {
        const { data, loadFilters } = this.props;
        if (!data || data.length === 0) {
            loadFilters();
        }
    }

    selectFilter(filter) {
        this.props.setFilter(filter.filter_name);
    }

    renderFilterItem(filter, selected) {
        let circleColor = filter.filter_name === selected ? "#2BA8BC" : "#fff";
        return (
            <TouchableOpacity onPress={() => this.selectFilter(filter)} style={styles.rowItem} key={filter.filter_name}>
                <Icon name="circle" size={20} color={circleColor} />
                <Label style={styles.lbl}>{filter.name}</Label>
            </TouchableOpacity>
        )
    }

    render() {
        const { loading, selected, data, setFilter } = this.props;
        if (loading) {
            return  <Spinner visible={loading} 
                        textContent={"Loading..."} 
                        textStyle={{color: '#FFF'}} />
        }

        let filters = data.map(item => this.renderFilterItem(item, selected));

        return (
            <Container style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={() => Actions.pop()}>
                    <Icon name="chevron-left" size={30} color="#fff" />
                </TouchableOpacity>
                {filters}
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    container: { backgroundColor: "$initBackground", paddingHorizontal: "50rem" },
    back: { marginBottom: "50rem" },
    rowItem: { flexDirection: "row", alignItems: "center", height: "50rem", marginBottom: "20rem" },
    lbl: { color: "#fff", marginLeft: "20rem" }
})

export default connect((state, props) => ({
    loading: state.filters.loading,
    selected: state.filters.selected,
    data: state.filters.data
}), (dispatch) => ({
    loadFilters: bindActionCreators(loadFilters, dispatch),
    setFilter: bindActionCreators(setFilter, dispatch)
}))(Filter);