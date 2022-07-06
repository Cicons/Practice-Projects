/**
 * Code written for practice problem at:
 * https://leetcode.com/problems/symmetric-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let start = root;
    let leftStack = [];
    let rightStack = [];
    let output = [];
    if (root) {
        let leftNode = start;
        let rightNode = start;
        
        /*
        if (!leftNode || !rightNode) {
            return false;
        }
        */
        
        while ((leftNode || leftStack.length > 0) && (rightNode || rightStack.length > 0)) {
            while (leftNode && rightNode) {
                // dig into the left side
                leftStack.push(leftNode);
                leftNode = leftNode.left;
                
                // do the opposite for the right side
                rightStack.push(rightNode);
                rightNode = rightNode.right;
            };
            // if we've reached the end of one tree half, and the other half has nodes left, it is not symmetric
            // or if leftNode is not the same as rightNode
            if (leftNode || rightNode /*|| (leftNode.val != rightNode.val)*/) {
                return false;
            };
            
            leftNode = leftStack.pop();
            rightNode = rightStack.pop();
            
            if (leftNode.val != rightNode.val) {
                return false;
            }
            
            leftNode = leftNode.right;
            rightNode = rightNode.left;
        }
    }
    else {
        // if the tree is empty, it is still symmetric
        return true;
    }
    
    return true;
};