import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TimeAgo from 'react-timeago';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
      checkedE: false,
      checkedF: false,
      checkedG: false,
      checkedH: false,
      checkedI: false,
    };
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const data = this.props.posts.results || [];

    const cards = data.map(card => (
      <Grid item xs={6} sm={3} key={card.id}>
        <Card>
          <CardMedia
            component="img"
            alt={card.name}
            height="140"
            image={card.image}
            title={card.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            <Typography spacing={2} variant="body2" color="textSecondary" component="p">
              id: {card.id} - Created <TimeAgo date={card.created} />
            </Typography>
            <hr></hr>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="caption" color="textPrimary" component="p">STATUS</Typography>
                <Typography variant="caption" color="textPrimary" component="p">SPECIES</Typography>
                <Typography variant="caption" color="textPrimary" component="p">GENDER</Typography>
                <Typography variant="caption" color="textPrimary" component="p">ORIGIN</Typography>
                <Typography variant="caption" color="textPrimary" component="p">LOCATION</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right" variant="caption" color="textPrimary" component="p">{card.status}</Typography>
                <Typography align="right" variant="caption" color="textPrimary" component="p">{card.species}</Typography>
                <Typography align="right" variant="caption" color="textPrimary" component="p">{card.gender}</Typography>
                <Typography align="right" variant="caption" color="textPrimary" component="p">{card.origin.name}</Typography>
                <Typography align="right" variant="caption" color="textPrimary" component="p">{card.location.name}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    ));
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2} >
            <h2>Filter</h2>
            <Paper bgcolor='grey' spacing={1}>
              <FormGroup>
                <h4>Species</h4>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                      color="primary"
                    />
                  }
                  label="Human"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Mythology"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedC}
                      onChange={this.handleChange('checkedC')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Other species"
                />
              </FormGroup>
            </Paper>
            <Paper bgcolor='grey' spacing={1}>
              <FormGroup>
                <h4>Gender</h4>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedD}
                      onChange={this.handleChange('checkedD')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Male"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedE}
                      onChange={this.handleChange('checkedE')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Female"
                />
              </FormGroup>
            </Paper>
            <Paper bgcolor='grey' spacing={1}>
              <FormGroup>
                <h4>Origin</h4>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedF}
                      onChange={this.handleChange('checkedF')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Unknown"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedH}
                      onChange={this.handleChange('checkedG')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Post-Apocalyptic"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedH}
                      onChange={this.handleChange('checkedH')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Nuptia 4"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedI}
                      onChange={this.handleChange('checkedI')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Other origins"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10}>
            <h2>Selected Filter</h2>
            <Grid>
              {Object.values(this.state).map(value => {
                if (value === true) {
                  return <Chip label={value} onDelete={() => { }} color="default" />
                }
              })}

            </Grid>
            <br></br>
            <Grid container direction='row' justify='space-between'>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Search by name"
                  id="outlined-size-small"
                  defaultValue=""
                  variant="outlined"
                  size='medium'
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=''
                    onChange={() => { }}
                  >
                    <MenuItem value={10}>Ascending</MenuItem>
                    <MenuItem value={20}>Descending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <br></br>
            <Grid container spacing={2}>
              {cards}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.any.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
