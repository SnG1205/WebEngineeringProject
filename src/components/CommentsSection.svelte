<script lang="ts">
    import AddCommentsSection from './AddCommentsSection.svelte';

    let isNotDisplayed = $state(true);
    let buttonText = $state('Show comments');
    let isExpanded = $state(false);
    const toggle = () => {
        if(isNotDisplayed){
            buttonText = 'Hide comments';
            isNotDisplayed = !isNotDisplayed;
            isExpanded = !isExpanded;
        }
        else{
            buttonText = 'Show comments';
            isNotDisplayed = !isNotDisplayed;
            isExpanded = !isExpanded;
        }
    }
</script>

<section class="comments">
    <div>
        <button type="button" class="show-hide" onclick={toggle} aria-controls="comment-section" aria-expanded={isExpanded}>
            {buttonText}
        </button>
    </div>

    <div class="{isNotDisplayed ? 'comment-wrapper-hidden' : 'comment-wrapper'}" id="comment-wrapper">
        <AddCommentsSection />
    </div>
</section>

<style>
 .comments {
     background-color: #def;
     padding: 10px;
 }
 .show-hide {
     cursor: pointer;
     text-align: center;
     width: 150px;
     font-size: 1.6rem;
     line-height: 32px;
     background: #333;
     border: 0;
     color: white;
 }
 .comment-wrapper {
     display: block;
 }
 .comment-wrapper-hidden {
     display: none;
 }
</style>