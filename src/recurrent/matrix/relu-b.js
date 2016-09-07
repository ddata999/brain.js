/**
 * adds {from} recurrence to {m} recurrence when {m} weights are above other a threshold of 0
 * @param {Matrix} from
 * @param {Matrix} m
 */
module.exports = function reluB(from, m) {
  for(var i = 0, max = m.weights.length; i < max; i++) {
    m.recurrence[i] += m.weights[i] > 0 ? from.recurrence[i] : 0;
  }
};