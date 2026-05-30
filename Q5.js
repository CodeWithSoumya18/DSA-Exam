// Implement preorder traversal.

function preorder(root) {
    if (root === null) return;

    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}