---
layout: page
title: Willkommen beim Fundkorb!
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare molestie commodo. Morbi interdum eget urna sit amet aliquet. Praesent eu magna ut nibh eleifend consectetur. Sed pharetra tortor eu orci rutrum, at mollis libero venenatis. Nullam ultricies erat sem, nec cursus metus pharetra nec. Nulla viverra magna sit amet convallis volutpat. Nulla non lectus libero.

{% include quiz.html %}

Integer aliquam augue ut enim laoreet, ut blandit nunc pellentesque. Nulla elit purus, blandit finibus nibh eu, tincidunt iaculis eros. Phasellus vel leo et nibh placerat malesuada. Nullam vel nisi dui. In hac habitasse platea dictumst. Nunc consequat sollicitudin urna, eu pretium ipsum condimentum eu. Curabitur lobortis, purus sit amet rhoncus rutrum, arcu sapien pharetra diam, sit amet aliquam purus enim eget dolor. Sed id velit a urna mollis placerat ac vitae sapien. Proin bibendum at ex id pretium. Vivamus lectus ex, tincidunt quis consequat at, egestas at felis.

Mauris quis velit imperdiet, accumsan velit a, consectetur magna. Donec auctor aliquam enim vitae rutrum. Nulla sed justo in orci dignissim commodo. In semper iaculis vulputate. Proin mattis sem rutrum iaculis vestibulum. Quisque malesuada rhoncus augue, eu facilisis nunc congue non. Curabitur ante mauris, tempor pellentesque mattis a, vehicula vitae augue. Praesent mollis metus turpis. In dolor ipsum, suscipit in luctus sit amet, rutrum ut velit. Aenean purus mauris, efficitur sed ullamcorper ac, euismod et nisl. Sed eu vestibulum enim.

Cras posuere sit amet turpis vel tristique. Suspendisse nec metus non tortor facilisis convallis non a arcu. Nulla vitae tellus dignissim, consequat sem vitae, elementum dolor. Donec vehicula, est non ultricies sodales, sapien ex auctor tortor, a maximus massa felis non lectus. Nunc placerat ut turpis at efficitur. Duis eleifend ligula laoreet risus ultrices, et mollis ligula volutpat. Nullam tempus facilisis scelerisque.

<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
