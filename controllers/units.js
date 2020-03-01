const Unit = require("../models/Unit");
// @desc    Get all units
// @route   GET /api/v1/units
// @access  Public
exports.getUnits = async (req, res, next) => {
  try {
    const units = await Unit.find();
    return res.status(200).json({
      success: true,
      count: units.length,
      data: {
        heroes: units.filter(unit => unit.category_id === 1),
        enemies: units.filter(unit => unit.category_id === 2)
      }
      //   data: units
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

exports.getCarol = async (req, res, next) => {
  try {
    const captMarvel = await Unit.find({ category_id: 3 });
    return res.status(200).json({
      success: true,
      count: 1,
      data: captMarvel
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
