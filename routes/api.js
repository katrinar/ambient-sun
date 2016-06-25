var express = require('express');
var router = express.Router();
var inquiryController = require('../controllers/InquiryController');

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	if(resource == 'inquiry'){

		inquiryController.get(req.query, false, function(err, results){
			if(err){
				 res.json({
  					confirmation: 'fail',
  					message: err
  			})
			return

			}
			res.json({
				confirmation: 'success',
				results: results
			})
			return
		})
	}

	else {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
	}
})

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource
	if (resource = 'inquiry'){
		inquiryController.post(req.body, function(err, result){
			if(err){
				res.json({
					confirmation: 'fail',
					message: err.message
				})
			return
			}
			res.json({
				confirmation: 'Success',
				result: result
			})
			return
		})
	}

	else {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
	}
})

module.exports = router;
