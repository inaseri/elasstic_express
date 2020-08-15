const express = require('express');
const router = express.Router();

const sourceTypeCtr = require('../../controllers/source_type/source_type.controller');

router.post('/create', sourceTypeCtr.createNewSourceType);
router.post('/search', sourceTypeCtr.searchWithIp);
router.post('/delete', sourceTypeCtr.deleteSourceTypeId);
router.post('/update', sourceTypeCtr.updateSourceTypeId);
router.get('/list', sourceTypeCtr.listSourceType);

module.exports = router;
