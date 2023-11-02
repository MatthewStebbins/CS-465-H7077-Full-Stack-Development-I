/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Gataways'});
};

module.exports = { travel };