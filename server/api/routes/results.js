const express = require('express');
const route = express.Router();

router.get('/', (req,res , next) =>{
    res.status(200).json({
        message: 'handling get request /results'
    }) 
})

router.post('/', (req,res , next) =>{
   
    res.status(200).json({
        message: 'handling post request /results'
    })
})


router.get('/:resultId', (req,res , next) =>{
    const id =req.params.resultId
    if(id === 'special'){
        res.status(200).json({
            message: 'you discovered special id', id: id
        })
    }else{
        res.status(200).json({
            message: 'you passed an id'
        })
    }
})
router.patch('/:resultId', (req,res , next) =>{
    res.status(200).json({
        message: 'result updated'
    })
})
router.patch('/:resultId', (req,res , next) =>{
    res.status(200).json({
        message: 'result deleted'
    })
})


    



module.exports = router