const express = require('express');

const Router = express.Router();

const {
    insert,
    remove,
    find,
    update
} = require('../db/mongo');
const {
    formatData,
    token
} = require('../utils');

//增加商品
Router.post('/add', async (req, res) => {
    let {
        title,
        src,
        sales,
        price,
        oldprice,
        attr,
        attr1,
        attr2,
        delivery
    } = req.body;
    let data
    try {
        insert('addAdmin', {
            title,
            src,
            sales,
            price,
            oldprice,
            attr,
            attr1,
            attr2,
            delivery
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//获取全部商品
Router.get('/', async (req, res) => {
    let {
        skip,
        limit,
        sort,
        asc,

    } = req.query;
    let data = await find('addAdmin', {

    }, {
        skip,
        limit,
        sort,
        asc
    });
    res.send(formatData({
        data
    }))
})

//单个  goodsAdmin
Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;
    let data = await find('addAdmin', {
        _id: id
    });
    res.send(formatData({
        data
    }))
})

//hot
Router.post('/attr', async (req, res) => {
    let {
        attr
    } = req.body;
    let data;
    if (attr) {
        data = await find('addAdmin', {
            attr: attr
        });
    }
    res.send(formatData({
        data
    }))
})

// 删除商品
Router.delete('/:id', (req, res) => {
    let {
        id
    } = req.params;
    let data
    try {
        remove('addAdmin', {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//修改商品
Router.patch('/:id', (req, res) => {
    let {
        id,
    } = req.params;
    let {
        title,
        src,
        sales,
        price,
        oldprice,
        attr,
        attr1,
        attr2,
        delivery
    } = req.body;

    try {
        if (title) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    title: title
                }
            })
        }
        if (sales) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    sales: sales
                }
            })
        }

        if (price) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    price: price
                }
            })
        }
        if (oldprice) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    oldprice: oldprice
                }
            })
        }
        if (src) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    src: src
                }
            })
        }
        if (attr) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    attr: attr
                }
            })
        }
        if (attr1) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    attr1: attr1
                }
            })
        }
        if (attr2) {
            update('addAdmin', {
                _id: id
            }, {
                $set: {
                    attr2: attr2
                }
            })
        }

        update('addAdmin', {
            _id: id
        }, {
            $set: {
                delivery: delivery
            }
        })

        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})



module.exports = Router;