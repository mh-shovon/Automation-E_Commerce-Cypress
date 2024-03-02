class ProductsPage{
    productDashboard(){
        cy.get('.title').should('have.text', 'Products')
    }

    viewProductDetails(){
        cy.get('#item_4_title_link > .inventory_item_name').click;
    }

    addingToCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    viewCartItem(){
        cy.get('.shopping_cart_link').click();
    }

    goingToCheckoutPage(){
        cy.get('[data-test="checkout"]').click();
    }
}

export default ProductsPage;