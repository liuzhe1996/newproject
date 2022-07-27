<template>
    <div>
        <!-- 加入自定义合计方法getSummaries  -->
        <el-table
            :data="tableData"
            border
            :show-summary="showSum"
            style="width: 100%"
            :summary-method="getSummaries"
        >
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="amount1" label="单价"></el-table-column>
            <el-table-column prop="amount2" label="数量">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.amount2" @input="wat(scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="amount3" label="总金额"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showSum: true,
            tableData: [{
                id: '1',
                name: '张三',
                amount1: 2,
                amount2: 3,
                amount3: 6
            }, {
                id: '2',
                name: '李四',
                amount1: 5,
                amount2: 4,
                amount3: 20
            }]
        }
    },
    methods: {
        // 更新数据时改变showSum的值
        wat(row) {
            this.showSum = false
            row.amount3 = row.amount2 * row.amount1;
            this.$nextTick()
                .then(() => {
                    this.showSum = true;
                })
        },
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                // 可以根据对象属性名判断是否合计
                // if (column.property === "amount3") {
                // 根据索引修改‘合计’文案
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                    // 可以根据索引判断是否合计
                } else if (index === 4) {
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += ' 元';
                    } else {
                        sums[index] = 'N/A';
                    }
                }
                // }
            });
            return sums;
        }
    }
}
</script>